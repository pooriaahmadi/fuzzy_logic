import { Content, ExplanationDiv, Title } from "./styles";

const Explanation = ({
    title,
    children,
    source,
    style = {},
    titleStyle = {},
}) => {
    return (
        <ExplanationDiv style={style}>
            <Title>
                <h1 style={titleStyle}>{title}</h1>
                {source && (
                    <a target="_blank" href={source}>
                        Source
                    </a>
                )}
            </Title>
            <Content>{children}</Content>
        </ExplanationDiv>
    );
};

export default Explanation;
