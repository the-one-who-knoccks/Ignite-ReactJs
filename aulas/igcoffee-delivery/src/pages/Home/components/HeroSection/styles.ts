import styled from 'styled-components'
import SectionBackgroundImg from '../../../../../src/assets/background-home.png'
import { rgba } from 'polished'
import { TitleText } from '../../../../components/Typography'

export const HeroContainer = styled.section`
  width: 100%;
  height: 34rem;

  background: ${({ theme }) => `url(${SectionBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors['base-white']} 0%,
        ${rgba(theme.colors['base-background'], 0.2)} 50%,
        ${theme.colors['base-background']} 100%
      )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const SectionContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`

export const SectionTitle = styled(TitleText)`
  margin-bottom: 1rem;
`

export const SubSectionTitle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`
