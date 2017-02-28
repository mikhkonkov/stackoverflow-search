Rails.application.routes.draw do

  scope module: :web do
    namespace :stackoverflow do
      resources :search, only: :index
    end
  end

end
