import { Name } from "./name"
import { Links } from "./links"
import { Images } from "./images"

export interface Ave {
    uid: string
    name: Name
    images: Images
    _links: Links
    sort: number
  }