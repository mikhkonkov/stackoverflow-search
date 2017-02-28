class QuestionList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>
      {this.props.list.map((question, index) => {
        return <div key={index} className="row">
          <div className="small-12 columns">
            <a href={question.link} target='_blank'>{question.link}</a>
          </div>
          <div className="small-12 columns"><p>
              <span>{question.title}</span> <em>{question.createdDate}</em>
          </p></div>
        </div>;
      })}
    </div>;
  }
}
