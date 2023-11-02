import { Helmet } from "react-helmet-async"

export const Head = ({ title = "Le Prestige" }) => {
  return (
    <Helmet>
      <title>
        {title}
      </title>
    </Helmet>
  )
}