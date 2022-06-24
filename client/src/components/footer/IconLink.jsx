import { Icon, Link } from "@chakra-ui/react";

export const IconLink = ({ link, icon }) => {
    return (
        <Link
            href={link}
            target="_blank"
        >
            <Icon
                as={icon}
                w={'38px'}
                h={'38px'}
            />
        </Link>
    );
};