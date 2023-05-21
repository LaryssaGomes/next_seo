import NextLink from 'next/link';

export default function Link({children, href, ...props}){
    // passHref permite que o href seja exibido no html do lado cliente
    return (
        <NextLink href={href} passHref>
            <a {...props}>{children}</a>
        </NextLink>
    )
}