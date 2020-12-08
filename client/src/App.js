
import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      resp: null,
      json: null,
      login: null,
      id: null,
      node_id: null,
      avatar_url: null,
      gravatar_id: null,
      url: null,
      html_url: null,
      followers_url: null,
      following_url: null,
      gists_url: null,
      starred_url: null,
      subscriptions_url: null,
      organizations_url: null,
      repos_url: null,
      events_url: null,
      received_events_url: null,
      type: null,
      site_admin: null,
      name: null,
      company: null,
      blog: null,
      location: null,
      email: null,
      hireable: null,
      bio: null,
      twitter_username: null,
      public_repos: null,
      public_gists: null,
      following: null,
      followers: null,
      created_at: null,
      updated_at: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:4242/users/${this.state.value}`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
        this.setState({
          resp: JSON.stringify(data),
          login: data.login,
          id: data.id,
          node_id: data.node_id,
          avatar_url: data.avatar_url,
          gravatar_id: data.gravatar_id,
          url: data.url,
          html_url: data.html_url,
          followers_url: data.followers_url,
          following_url: data.following_url,
          gists_url: data.gists_url,
          starred_url: data.starred_url,
          subscriptions_url: data.subscriptions_url,
          organizations_url: data.organizations_url,
          repos_url: data.repos_url,
          events_url: data.events_url,
          received_events_url: data.received_events_url,
          type: data.type,
          site_admin: data.site_admin,
          name:  data.name,
          company: data.company,
          blog: data.blog,
          location: data.location,
          email: data.email,
          hireable: data.hireable,
          bio: data.bio,
          twitter_username: data.twitter_username,
          public_repos: data.public_repos,
          public_gists: data.public_gists,
          following: data.following,
          followers: data.followers,
          created_at: data.created_at,
          updated_at: data.updated_at
        })
        console.log(data.name)
        console.log(data.login)
    })
  }
 render() {
    const isFollowers_url = this.state.followers_url;
    let followers_url;
    if (isFollowers_url) {
      followers_url = <ListGroup.Item>  
                        <FontAwesomeIcon icon={faUserFriends} /> 
                        <a href={this.state.followers_url}> {this.state.followers} followers</a> 
                        <a href={this.state.following_url}> {this.state.following} followers</a>
                      </ListGroup.Item>;
    } else {
      followers_url = "";
    }
    const isConpany = this.state.company;
    let company;
    if (isConpany) {
      company = <ListGroup.Item>  
                  <p><FontAwesomeIcon icon={faBuilding} /> {this.state.company}</p> 
                </ListGroup.Item>;
    } else {
      company = "";
    }
    const isLocation = this.state.location;
    let location;
    if (isLocation) {
      location = <ListGroup.Item>  
                  <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {this.state.location}</p> 
                </ListGroup.Item>;
    } else {
      location = "";
    }
 const isEamil = this.state.email;
    let email;
    if (isEamil) {
      email = <ListGroup.Item>  
                <p><FontAwesomeIcon icon={faEnvelope} /> {this.state.email}</p> 
              </ListGroup.Item>;
    } else {
      email = "";
    }
    const isBlog = this.state.blog;
    let blog;
    if (isBlog) {
      blog = <ListGroup.Item>  
                <a href={this.state.blog}><FontAwesomeIcon icon={faLink} /> {this.state.blog}</a> 
              </ListGroup.Item>;
    } else {
      blog = "";
    }
    const isPublicRepos = this.state.public_repos;
    let public_repos;
    if (isPublicRepos) {
      public_repos = <ListGroup.Item>  
                      <a href={this.state.repos_url}><FontAwesomeIcon icon={faBook} /> {this.state.public_repos}</a> 
                    </ListGroup.Item>;
    } else {
      public_repos = "";
    }
    const isId = this.state.id;
    let allData;
    if (isId) {
      allData =   
 <Table striped bordered hover size="sm">
      <tbody>
        <tr>
          <td>login</td>
          <td>{this.state.login}</td>
        </tr>
        <tr>
          <td>id</td>
          <td>{this.state.id}</td>
        </tr>
        <tr>
          <td>node_id</td>
          <td>{this.state.node_id}</td>
        </tr>
        <tr>
          <td>avatar_url</td>
          <td>{this.state.avatar_url}</td>
        </tr>
        <tr>
          <td>gravatar_id</td>
          <td>{this.state.gravatar_id}</td>
        </tr>
        <tr>
          <td>url</td>
          <td>{this.state.url}</td>
        </tr>
        <tr>
          <td>html_url</td>
          <td>{this.state.html_url}</td>
        </tr>
        <tr>
          <td>followers_url</td>
          <td>{this.state.followers_url}</td>
        </tr>
        <tr>
          <td>following_url</td>
          <td>{this.state.following_url}</td>
        </tr>
        <tr>
          <td>gists_url</td>
          <td>{this.state.gists_url}</td>
        </tr>
        <tr>
          <td>starred_url</td>
          <td>{this.state.starred_url}</td>
        </tr>
        <tr>
          <td>subscriptions_url</td>
          <td>{this.state.subscriptions_url}</td>
        </tr>
        <tr>
          <td>organizations_url</td>
          <td>{this.state.organizations_url}</td>
        </tr>
        <tr>
          <td>repos_url</td>
          <td>{this.state.repos_url}</td>
        </tr>
        <tr>
          <td>events_url</td>
          <td>{this.state.events_url}</td>
        </tr>
        <tr>
          <td>received_events_url</td>
          <td>{this.state.received_events_url}</td>
        </tr>
        <tr>
          <td>type</td>
          <td>{this.state.type}</td>
        </tr>
        <tr>
          <td>site_admin</td>
          <td>{this.state.site_admin}</td>
        </tr>
        <tr>
          <td>name</td>
          <td>{this.state.name}</td>
        </tr>
        <tr>
          <td>company</td>
          <td>{this.state.company}</td>
        </tr>
        <tr>
          <td>blog</td>
          <td>{this.state.blog}</td>
        </tr>
        <tr>
          <td>location</td>
          <td>{this.state.location}</td>
        </tr>
        <tr>
          <td>email</td>
          <td>{this.state.email}</td>
        </tr>
        <tr>
          <td>hireable</td>
          <td>{this.state.hireable}</td>
        </tr>
        <tr>
          <td>bio</td>
          <td>{this.state.bio}</td>
        </tr>
        <tr>
          <td>twitter_username</td>
          <td>{this.state.twitter_username}</td>
        </tr>
        <tr>
          <td>public_repos</td>
          <td>{this.state.public_repos}</td>
        </tr>
        <tr>
          <td>public_gists</td>
          <td>{this.state.public_gists}</td>
        </tr>
        <tr>
          <td>following</td>
          <td>{this.state.following}</td>
        </tr>
        <tr>
          <td>followers</td>
          <td>{this.state.followers}</td>
        </tr>
        <tr>
          <td>created_at</td>
          <td>{this.state.created_at}</td>
        </tr>
        <tr>
          <td>updated_at</td>
          <td>{this.state.updated_at}</td>
        </tr>
      </tbody>
    </Table>
    } else {
      allData = "";
    }

  return (
     
      <div>
        <Container>
        <h1>Search-Git</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username :</Form.Label>
              <Form.Control type="text" value={this.state.value} placeholder="Enter username" onChange={this.handleChange}/>
            </Form.Group>
            <Row  className="justify-content-md-center">
              <Button variant="primary" type="submit" >
                Submit
              </Button>
            </Row>
          </Form>
          <Jumbotron>
          <Row>
            <Col  md={6}>
                <Image src={this.state.avatar_url} fluid rounded />
            </Col>
            <Col md={6}>
            <h2>{this.state.login}</h2>
            <h4>{this.state.name}</h4>
            <p>{this.state.bio}</p>
            <ListGroup variant="flush">
          <ListGroup isLoggedIn={isFollowers_url} />
              {followers_url}
            <ListGroup isLoggedIn={isConpany} />
              {company}
            <ListGroup isLoggedIn={isLocation} />
              {location}
            <ListGroup isLoggedIn={isEamil} />
              {email}
            <ListGroup isLoggedIn={isBlog} />
              {blog}
            <ListGroup isLoggedIn={isPublicRepos} />
                {public_repos}
          </ListGroup>
            </Col>
          </Row>
          </Jumbotron>
          <Table isLoggedIn={isId} />
                {allData}
        </Container>
      </div>
    );
  }
}

export default App;