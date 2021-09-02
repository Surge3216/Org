import { Header, Icon } from 'semantic-ui-react'


export default function Home() {
    return (
        <div>
           <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Friends</Header.Content>
    </Header>
  </div>
        </div>
    )
}
