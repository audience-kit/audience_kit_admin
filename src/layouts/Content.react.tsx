import {
    ContentPlaceholder,
    Label,
    type ContentPlaceholderProps,
} from './ContentPlaceholder.react'

export const Content = (props: ContentPlaceholderProps) => {
    return (
        <ContentPlaceholder minH="2xl" borderWidth="1px" {...props}>
            <Label>Content</Label>
        </ContentPlaceholder>
    )
}
