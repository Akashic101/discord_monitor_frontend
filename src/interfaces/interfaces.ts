declare module interfaces {
	export interface userProps {
		id: number;
        userId: string;
        username: string;
        avatar: string;
        banner: string;
        accentColor: string;
        bot: boolean;
        createdAt: string;
        discriminator: string;
        messagesSend: number;
        children?: React.ReactNode;
    }

	export interface channelProps {
		id: number;
        createdAt: Date;
        channelID: number;
        channelName: string;
        channelTopic: string;
        channelNSFW: boolean;
        parentID: number;
        url: URL;
        type: number;
        messageCount: number;
        color: number;
        children?: React.ReactNode
    }
	
	export interface roleProps {
		id: number;
        name: string;
        color: string;
        createdAt: Date;
        icon: string;
        roleId: number;
        managed: boolean;
        mentionable: boolean;
        position: number;
        memberCount: number;
        children?: React.ReactNode
	}
}

export default interfaces;
