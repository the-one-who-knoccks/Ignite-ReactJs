import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque uma transação" />

      <button type="submit">Buscar</button>
    </SearchFormContainer>
  )
}
