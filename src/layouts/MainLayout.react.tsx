import { Container, Stack } from '@chakra-ui/react'
import { Sidebar } from './Sidebar.react'
import { Content } from './Content.react'
import { Navbar } from './Navbar.react'

export const Block = () => {
    return (
        <Stack flex="1" gap="8" py={{ base: '4', md: '6', lg: '8' }}>
            <Navbar position="sticky" top="0" zIndex="docked" />
            <Container display="flex" flex="1">
                <Stack gap="8" direction={{ base: 'column-reverse', md: 'row' }} flex="1" justify="start">
                    <Content />
                    <Sidebar />
                </Stack>
            </Container>
        </Stack>
    )
}
