import {
    Badge,
    Container,
    HStack,
    Heading,
    Spacer,
    Tabs,
    Text,
    Button,
    NativeSelect,
    SegmentGroup,
} from '@chakra-ui/react'
import { LuLayoutGrid, LuLayoutList, LuPalette, LuPlus, LuSettings } from 'react-icons/lu'
import { ContentPlaceholder } from './ContentPlaceholder.react'

export const Block = () => {
    return (
        <Container maxW="6xl" py={{ base: '16', md: '24' }}>
            <Heading size="3xl" py="6">
                Design Tokens
            </Heading>
            <Tabs.Root size="lg" defaultValue="tokens">
                <Tabs.List>
                    <Tabs.Trigger key="tokens" />
                    <Tabs.Trigger key="automations"/>
                    <Spacer />
                    <HStack pos="relative" bottom="2" gap="4">
                        <HStack hideBelow="md">
                            <Text fontWeight="medium" textStyle="sm">
                                Sort by
                            </Text>
                            <NativeSelect.Root width="100px">
                                <NativeSelect.Field>
                                    <option value="name">Name</option>
                                    <option value="date">Date</option>
                                    <option value="type">Type</option>
                                    <option value="status">Status</option>
                                </NativeSelect.Field>
                                <NativeSelect.Indicator />
                            </NativeSelect.Root>
                        </HStack>
                        <SegmentGroup.Root hideBelow="md" defaultValue="list">
                            <SegmentGroup.Indicator />
                            <SegmentGroup.Items
                                items={[
                                    { value: 'list', label: <LuLayoutList /> },
                                    { value: 'grid', label: <LuLayoutGrid /> },
                                ]}
                            />
                        </SegmentGroup.Root>
                        <Button size="sm">
                            <LuPlus /> Add Token
                        </Button>
                    </HStack>
                </Tabs.List>
                <Tabs.Content key="tokens" />
                <Tabs.Content key="automations" />
            </Tabs.Root>
        </Container>
    )
}
