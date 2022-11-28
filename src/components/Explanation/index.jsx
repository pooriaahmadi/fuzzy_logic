import { Content, ExplanationDiv, Title } from "./styles";

const Explanation = ({ title, children, style = {}, titleStyle = {} }) => {
    return (
        <ExplanationDiv style={style}>
            <Title>
                <h1 style={titleStyle}>{title}</h1>
            </Title>
            <Content>{children}</Content>
        </ExplanationDiv>
    );
};

export default Explanation;
