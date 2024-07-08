import { redirect  } from "next/navigation";
import { revalidatePath } from 'next/cache'

/**
 * @name checkRevalidation
 * @desc Will redirect to a path without 'revalidate' or return true
 * @param {array} slug - from generateMetadata({params.slug}) 
 * @param {string} validateString - check for this string in the url and invalidate
 */
export const checkRevalidation = (slug, validateString='revalidate') => {
    if(slug?.includes(validateString)){
      const tmpSlug = slug.filter(str => str !== validateString)
      revalidatePath('/', 'layout')
      redirect(`/${tmpSlug.toString().replaceAll(',','/')}`)
      
    }
    return true
  }