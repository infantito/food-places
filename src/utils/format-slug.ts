const formatSlug = (name: string): string => {
  return name.toLowerCase().split(/ |'|-/g).join('-')
}

export default formatSlug
