import './navigationCard.css';

type navigationCardType = {
    externalLink: string | URL,
    linkName: string,
    logo: string
}

export const NavigationCard: React.FC<navigationCardType> = ({externalLink, linkName, logo}) => {
	return (
		<section className="startseite-button" onClick={() => window.open(externalLink)}>
			<img src={logo} width="20%" />
			<p className="startseite-button-text">{linkName}</p>
		</section>
	);
};
