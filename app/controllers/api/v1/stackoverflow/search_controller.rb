class Api::V1::Stackoverflow::SearchController < Api::V1::Stackoverflow::ApplicationController

  def index
    api_path = 'https://api.stackexchange.com/2.2'
    response = HTTParty.get("#{ api_path }/search",
                            query: { site: :stackoverflow, order: :desc,
                                     sort: :activity, intitle: params[:q] })
    items = response.parsed_response['items']
    results = items.present? ? items.map do |item|
      { link: item['link'], title: item['title'], createdDate: Time.at(item['creation_date']).to_date }
    end : response.parsed_response
    render json: results
  end
end
