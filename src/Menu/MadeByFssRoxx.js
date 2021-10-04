import styled from "styled-components";
import {DialogShadow, Dialog, DialogBanner, DialogBannerName, DialogContent} from "../FoodDialog/FoodDialog";
import React from "react";
import {Title} from "../styles/title";

const _Radius = `border-radius: 10px`;

const TitleMadeBy = styled(Title)`
    font-size: 30px;
`

const MadeByDialog = styled(Dialog)`
    ${_Radius};
    top:150px;
    left: calc(50% - 400px);
`;

const MadeByDB = styled(DialogBanner)`
    ${_Radius}
`

const MadeByDialogContent = styled(DialogContent)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
`



export function MadeBy ({display, setDisplay}) {
    const closeMadeBy = () => setDisplay('none')
    return (
        <div style={{display: `${display}`}}>
            <DialogShadow onClick={() => closeMadeBy()}/>
            <MadeByDialog >
                <MadeByDB img="/img/made1.jpeg">
                    <DialogBannerName>Made By FssRoxx 💓</DialogBannerName>
                </MadeByDB>
                <MadeByDialogContent>
                    <TitleMadeBy>
                        Thanx for wathing this site!
                    </TitleMadeBy>
                    <TitleMadeBy>
                        I hope U'll like it!
                    </TitleMadeBy>
                </MadeByDialogContent>
            </MadeByDialog>
        </div>
    )
}