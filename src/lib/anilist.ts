import { invoke } from "@tauri-apps/api/core";

interface Viewer {
	name: string;
	id: number;
	avatar: {
		full: string;
		medium: string;
	};
}

interface MediaListCollection {
	lists: List[];
}

export interface List {
	name: string;
	entries: {
		id: number;
		media: Media;
	}[];
}

export interface CharacterEdge {
	role: string;
	node: {
		id: number;
		image: {
			medium: string;
		};
		name: {
			full: string;
			native: string;
			userPreferred: string;
		};
	};
	voiceActors: {
		languageV2: string;
		id: number;
		name: {
			full: string;
			native: string;
			userPreferred: string;
		};
		image: {
			medium: string;
		};
	}[];
}

export interface Media {
	id: number;
	bannerImage: string;
	description: string;
	episodes: number;
	status: "FINISHED" | "RELEASING" | "NOT_YET_RELEASED" | "CANCELLED" | "HIATUS";
	nextAiringEpisode?: {
		episode: number;
		airingAt: number;
	};
	coverImage: {
		large: string;
		color: string;
	};
	genres: string[];
	title: Title;
	characters: {
		edges: CharacterEdge[];
	};
	recommendations: {
		nodes: {
			mediaRecommendation: Media;
		}[];
	};
}

interface Title {
	userPreferred: string;
	romaji: string;
	english?: string;
}

interface Query {
	data: {
		Viewer?: Viewer;
		MediaListCollection?: MediaListCollection;
		Media?: Media;
	};
}

export async function getUserId() {
	const q = await invoke<Query>("graphql", {
		query: `
			query {
				Viewer {
					id
				}
			}
		`,
		variables: {},
	});

	return q.data.Viewer?.id;
}

export async function getProfile() {
	const q = await invoke<Query>("graphql", {
		query: `
			query {
				Viewer {
					name
					avatar {
						medium
					}
				}
			}
		`,
		variables: {},
	});

	return {
		name: q.data.Viewer?.name,
		avatar: q.data.Viewer?.avatar?.medium,
	};
}

export async function getMediaLists(type: "anime" | "manga") {
	const q = await invoke<Query>("graphql", {
		query: `
			query($type: MediaType!, $userId: Int!) {
				MediaListCollection(type: $type, userId: $userId) {
					lists {
						name
						entries {
							id
							media {
								id
								coverImage {
									large
									color
								}
								title {
									romaji
									english
								}
							}
						}
					}
				}
			}
		`,
		variables: {
			type: type.toUpperCase(),
			userId: await getUserId(),
		},
	});

	return q.data.MediaListCollection?.lists;
}

export async function getMedia(id: number) {
	const q = await invoke<Query>("graphql", {
		query: `
			query($id: Int!) {
				Media(id: $id) {
					id
					bannerImage
					description
					episodes
					status
					genres
					coverImage {
						large
						color
					}
					title {
						romaji
						english
					}
					nextAiringEpisode {
						episode
						airingAt
					}
					characters {
						edges {
							role
							node {
								id
								image {
									medium
								}
								name {
									userPreferred
									native
									full
								}
							}
							voiceActors {
								languageV2
								id
								name {
									userPreferred
									native
									full
								}
								image {
									medium
								}
							}
						}
					}
					recommendations {
						nodes {
							mediaRecommendation {
								id
								coverImage {
									large
								}
								title {
									romaji
									english
								}
							}
						}
					}
				}
			}
		`,
		variables: {
			id,
		},
	});

	return q.data.Media;
}
