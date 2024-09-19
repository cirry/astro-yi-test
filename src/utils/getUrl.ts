const isProd = import.meta.env.PROD;
import {config} from '../consts'

/**
 * handle GitHub Pages url or other prefix url
 * @param suffixUrl blog
 * @result /astro-yi/blog
 */
export const getUrl = (suffixUrl ?: string): string => {
  if (!isProd) {
    return ''
  }
  return '/' + config.githubPagePrefix + '/' + suffixUrl
}
