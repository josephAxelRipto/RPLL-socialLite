import React, { Component } from 'react'
import Sticky from 'react-sticky-el';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Model4 from "../asset/model4.jpg";
import Model5 from "../asset/model5.jpg";
import Model6 from "../asset/model6.jpg";
import Model7 from "../asset/model7.jfif";
class suggestComponent extends Component {
    render() {
        const style = {
            storyIcon: {
                borderRadius: "55px",
                width: "50px",
                height: "50px",
            },
            textStory: {
                marginTop: "15px",
                marginLeft: "12px",
            },
            sticky: {
                height: '350px',
                width: "200px",
                overflow: 'scroll',
                position: "fixed"
            },
            margin: {
                marginBottom: "15px"
            },

        };

        const useStyles = theme => ({
            root: {
                width: '100%',
                maxWidth: 360,
                backgroundColor: theme.palette.background.paper,
            },
        });

        return (
            <div className="scrollarea" style={style.sticky}>
                <Sticky>
                    <p className="text-muted">SUGGESTED ACCOUNT</p>
                    <List dense className={useStyles.root}>
                        <ListItem key="1" button style={style.margin}>
                            <ListItemAvatar>
                                <Avatar
                                    alt="story"
                                    src={Model5} />
                            </ListItemAvatar>
                            <ListItemText primary={'Luna Maya'} />
                        </ListItem>
                        <ListItem key="2" button style={style.margin}>
                            <ListItemAvatar>
                                <Avatar
                                    alt="story"
                                    src={Model7} />
                            </ListItemAvatar>
                            <ListItemText primary={'Mamank'} />
                        </ListItem>
                        <ListItem key="3" button style={style.margin}>
                            <ListItemAvatar>
                                <Avatar
                                    alt="story"
                                    src={Model6} />
                            </ListItemAvatar>
                            <ListItemText primary={'Who Am I?'} />
                        </ListItem>
                        <ListItem key="0" button>
                            <ListItemAvatar>
                                <Avatar
                                    alt="story"
                                    src={Model4} />
                            </ListItemAvatar>
                            <ListItemText primary={'Budi'} />
                        </ListItem>
                    </List>
                </Sticky>
            </div>
        )
    }
}
export default suggestComponent;