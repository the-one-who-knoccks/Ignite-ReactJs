import { ExternalLink } from '../../../../components/ExternalLink'
import { PostHeaderContainer } from './styles'
import {
  faCalendar,
  faComment,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { IPostProps } from '../../../Home'
import { Loading } from '../../../../components/Loading'
import { relativeDateFormatter } from '../../../../utils/formatter'

interface PostHeaderProps {
  postData: IPostProps
  isLoading: boolean
}

export function PostHeader({ postData, isLoading }: PostHeaderProps) {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  const formattedDate = relativeDateFormatter(postData?.created_at)

  return (
    <PostHeaderContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <header>
            <ExternalLink
              as="button"
              onClick={goBack}
              variant="iconLeft"
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text="Voltar"
            />
            <ExternalLink
              text="Ver no Github"
              href={postData.html_url}
              target="_blank"
            />
          </header>
          <h1>{postData.title}</h1>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {postData.comments} comentários
            </li>
          </ul>
        </>
      )}
    </PostHeaderContainer>
  )
}
