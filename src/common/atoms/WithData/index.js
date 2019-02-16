import { branch, renderNothing } from 'recompose'

export default branch(({ data }) => !data, renderNothing)
