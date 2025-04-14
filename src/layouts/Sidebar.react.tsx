import {
    ContentPlaceholder,
    Label,
    type ContentPlaceholderProps,
} from './ContentPlaceholder.react'

export const Sidebar = (props: ContentPlaceholderProps) => {
    return (
        <ContentPlaceholder borderWidth="1px" width={{ base: 'full', md: 'sm' }} minH="40" {...props}>
            <Label>Sidebar</Label>
        </ContentPlaceholder>
    )
}
