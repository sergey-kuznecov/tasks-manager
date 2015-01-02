class Api::V1::CommentsController < ApplicationController

  inherit_resources
  respond_to :json

  def permitted_params
    params.permit(:id, comment: [:text, :task_id])
  end
end