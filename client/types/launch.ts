import { ID, Date } from './base'
export type LaunchRocket = {
	__typename: string
	rocket_name: string
	rocket: {
		id: ID
	}
}

export type LaunchSite = {
	__typename: string
	site_id: string
	site_name: string
	site_name_long: string
}

export type Launch = {
	__typename: string
	id: ID
	details?: string
	launch_date_local: Date
	mission_name: string
	rocket: LaunchRocket
	launch_site: LaunchSite
}
