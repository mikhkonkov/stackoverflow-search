class Api::V1::Stackoverflow::SearchController < Api::V1::Stackoverflow::ApplicationController

  def index
    api_path = 'https://api.stackexchange.com/2.2'
    response = HTTParty.get("#{ api_path }/search",
                            query: { site: :stackoverflow, order: :desc,
                                     sort: :activity, intitle: params[:q] })
    render json: response.parsed_response['items'].map { |item| { link: item['link'], title: item['title'] } }
  end
end
