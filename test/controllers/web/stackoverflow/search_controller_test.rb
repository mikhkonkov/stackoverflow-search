require 'test_helper'

class Web::Stackoverflow::SearchControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get web_stackoverflow_search_index_url
    assert_response :success
  end

end
