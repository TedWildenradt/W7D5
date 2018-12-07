class Api::SessionsController < ApplicationController
  def create

  end

  def destroy
    if logged_in?
      render json: {}
    else
      render json: ["Nobody Logged in"], status: 404
    end
  end

end
