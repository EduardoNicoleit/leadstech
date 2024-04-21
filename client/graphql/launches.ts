export type ID = string
export type Date = string
export const LAUNCHES_QUERY = gql`
	query launches {
		launches {
			id
			mission_name
			launch_date_local
			rocket {
				rocket_name
				rocket {
					id
				}
			}
			details
			launch_site {
				site_id
				site_name
				site_name_long
			}
		}
	}
`
