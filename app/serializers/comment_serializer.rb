class CommentSerializer < ActiveModel::Serializer
  attributes :id, :task_id, :text

end