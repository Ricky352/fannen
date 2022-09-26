import Image from 'next/image'
import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { Title } from '@/components/Title'
import { Text } from '@/components/Text'
import { Card } from '@/components/Card'

export default function About() {
    return (
        <>
            <Layout pageTitle="About">
                <Card>
                    <Container margin="28px 0px 0px 0px">
                        <Title title="About" size="48px" />
                        <Text
                            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus corrupti praesentium dolore architecto cum, odit, fuga laborum culpa repellendus sint? Fugit ipsam veritatis blanditiis excepturi quo at quidem? Placeat."
                            margin="32px 0px 0px 0px"
                        />
                        <Image src="/fannen.png" height={300} width={300} />
                        <Text
                            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus corrupti praesentium dolore architecto cum, odit, fuga laborum culpa repellendus sint? Fugit ipsam veritatis blanditiis excepturi quo at quidem? Placeat."
                            margin="32px 0px 0px 0px"
                        />
                        <Image src="/fannen.png" height={300} width={300} />
                        <Text
                            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus corrupti praesentium dolore architecto cum, odit, fuga laborum culpa repellendus sint? Fugit ipsam veritatis blanditiis excepturi quo at quidem? Placeat."
                            margin="32px 0px"
                        />
                    </Container>
                </Card>
            </Layout>
        </>
    )
}

// DONE
