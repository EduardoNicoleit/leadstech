import { ID, Date, Int } from './base'
type Distance = {
	feet: number
	meters: number
}
type Mass = {
	kg: number
	lb: number
}
export type Rocket = {
	__typename: string
	id: ID
	name: string
	description: string
	first_flight: Date
	height: Distance
	diameter: Distance
	mass: Mass
	stages: Int
}
