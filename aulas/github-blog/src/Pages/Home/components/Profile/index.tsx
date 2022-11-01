import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/the-one-who-knoccks.png" />
      <ProfileDetails>
        <header>
          <h1>Thiago Alves</h1>
          <ExternalLink text="github" href="#" />
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            the-one-who-knoccks
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Stefanini
          </li>

          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            376 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}