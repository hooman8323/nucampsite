import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class CampsiteInfo extends Component {
  render() {
    const renderComments = (comments) => {
      if (comments) {
        return (
          <div className="col-md-5 m-1">
            <h4>Comments</h4>
            {comments.map((comment) => {
              return (
                <div>
                  <p>
                    {comment.text}
                    <br />
                    -- {comment.author},{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date(Date.parse(comment.date)))}
                  </p>
                </div>
              );
            })}
          </div>
        );
      }
      return <div></div>;
    };

    const renderCampsite = (campsite) => {
      if (campsite) {
        return (
          <div className="col-md-5 m-1">
            <Card>
              <CardImg top src={campsite.image} alt={campsite.name} />
              <CardBody>
                <CardTitle>{campsite.name}</CardTitle>
                <CardText>{campsite.description}</CardText>
              </CardBody>
            </Card>
          </div>
        );
      }
    };

    return (
      <div className="row">
        {renderCampsite(this.props.campsite)}
        {this.props.campsite && renderComments(this.props.campsite.comments)}
      </div>
    );
  }
}

export default CampsiteInfo;
