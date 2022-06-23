import { Box, Center, Flex, Grid, Icon, Link, Text } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdOutlinePersonPin } from 'react-icons/md';
import { FcLike } from "react-icons/fc";

export const Footer = () => {

    return (
        <Box h={'300px'} bg={'black'} color={'white'} mt={'40px'}>
            <Center h={'80px'}>
                <Text className="typeWritertheme">Made with <Icon as={FcLike} /> by Mohit Sehrawat</Text>
            </Center>
            <Grid h={'220px'} templateColumns={['100%', '25% 25% 50%']}>
                <Center>
                    <Flex fontSize={["11px", '14px']} gap={'10px'} fontWeight={600} flexDirection={'column'} >
                        <Text>FIND A NEARBY STORE</Text>
                        <Text>BECOME A MEMBER</Text>
                        <Text>ALREADY A MEMBER</Text>
                        <Text>SIGNUP FOR EMAIL</Text>
                        <Text>SEND US FEEDBACK</Text>
                    </Flex>
                </Center>
                <Center>
                    <Flex display={['none', 'flex']} fontSize={'14px'} gap={'10px'} flexDirection={'column'} color={'gray'} >
                        <Text color={'white'} fontWeight={600}>GET HELP</Text>
                        <Text>Order Status</Text>
                        <Text>Delivery</Text>
                        <Text>Returns</Text>
                        <Text>Payment Options</Text>
                    </Flex>
                </Center>
                <Flex h={'39px'} fontSize={'14px'} gap={'15px'} flexDirection={'row-reverse'} justifyContent={['center', 'right']} color={'gray'} mr={['0px', '80px']} >
                    <IconLink icon={MdOutlinePersonPin} link={"https://mohit-portfolio.vercel.app/"} />
                    <IconLink icon={FaGithub} link={"https://github.com/m-sehrawat/"} />
                    <IconLink icon={FaLinkedin} link={"https://www.linkedin.com/in/m-sehrawat/"} />
                </Flex>
            </Grid>
        </Box>
    );
};


const IconLink = ({ link, icon }) => {
    return <Link href={link} target="_blank"><Icon as={icon} w={'38px'} h={'38px'} /></Link>
};

