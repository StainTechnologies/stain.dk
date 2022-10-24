import { MDXProvider } from '@mdx-js/react'
import React, { PropsWithChildren } from 'react'
import StainCover from './stain-cover'

const customComponents = {
    StainCover: StainCover
}

const coreComponents = {
    h1: (props: any) => <h1 className="text-4xl font-bold mb-2" {...props}/>,
    p: (props: any) => <p className="text-md mb-2" {...props}/>,
}

const components = {...coreComponents, ...customComponents}

export default function MDXSetup({children}: PropsWithChildren) {
    return(
        <MDXProvider components={components}>{children}</MDXProvider>
    )
}