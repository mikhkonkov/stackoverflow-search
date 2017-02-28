class SearchQuestions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      list: []
    };
  }

  loadQuestions() {
    if (this.state.searchQuery.length == 0) {
      this.setState({list: []});
      return;
    }
    $.ajax({
      data: {q: this.state.searchQuery},
      url: '/api/v1/stackoverflow/search',
      type: 'get',
      success: function(data, status) {
        if (status === 'success') {
          this.setState({list: data});
        }
      }.bind(this)
    });
  }

  onChangeSearchInput(e) {
    this.setState({searchQuery: e.target.value}, this.loadQuestions);
  }

  renderSearchInput() {
    return <input
      type="text"
      value={this.state.searchQuery}
      onChange={this.onChangeSearchInput.bind(this)}
      placeholder="Search..."
    />;
  }

  render() {
    return <div>
      <div className="row">
        <div className="small-12 columns">
          <h3>Search on Stackoverflow</h3>
          {this.renderSearchInput()}
        </div>
      </div>
      <QuestionList list={this.state.list} />
    </div>;
  }
}
