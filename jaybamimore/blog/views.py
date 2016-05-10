from django.shortcuts import render, get_object_or_404

# Create your views here.
from blog.models import Post

def post_list(request):
	entries = Post.objects.all()[:10][::-1]
	return render(request, 'post_list.html', {'posts' : entries})

def post_info(request, pk):
	post = get_object_or_404(Post, pk=pk)
	return render(request, 'post_info.html', {'post' : post})