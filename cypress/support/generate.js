import {build, fake} from 'test-data-bot'

export const buildUser = build('User').fields({
  username: fake(x => x.internet.userName()),
  password: fake(x => x.internet.password()),
})
