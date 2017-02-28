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
    return <input value={this.state.searchQuery} onChange={this.onChangeSearchInput.bind(this)} />
  }

  render() {
    return <div>
      {this.renderSearchInput()}
      <QuestionList list={this.state.list} />
    </div>;
  }
}
