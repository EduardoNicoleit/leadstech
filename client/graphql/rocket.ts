export const ROCKET_QUERY = gql`
	query rocket($rocketId: ID!) {
		rocket(id: $rocketId) {
			id
			name
			stages
			description
			first_flight
			diameter {
				feet
				meters
			}
			height {
				feet
				meters
			}
			mass {
				kg
				lb
			}
		}
	}
`

export const ROCKETS_QUERY = gql`
	query rockets {
		rockets {
			id
			name
			stages
			description
			first_flight
			diameter {
				feet
				meters
			}
			height {
				feet
				meters
			}
			mass {
				kg
				lb
			}
		}
	}
`
