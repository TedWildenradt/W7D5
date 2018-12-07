class ApplicationController < ActionController::Base
  helper_method :current_user, :require_login, :logged_in?

  attr_reader :current_user

  def login(user)
    @current_user = user
    user = User.find_by_credentials(user[:username], user[:password])
    session[:session_token] = user.reset_session_token

  end

  def logout
    current_user.reset_session_token
    session[:session_token] = nil
    @current_user = nil 
  end

  def require_login
    redirect_to new_session_url unless logged_in?
  end

  def logged_in?
    !!current_user
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

end
