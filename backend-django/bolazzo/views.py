from django.shortcuts import render
from rest_framework import viewsets
from .serializers import MatchSerializer
from .models import Match

# Create your views here.

class MatchView(viewsets.ModelViewSet):
    serializer_class = MatchSerializer
    queryset = Match.objects.all()
