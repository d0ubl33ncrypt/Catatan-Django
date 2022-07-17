from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Catatan
from .serializer import SerializerCatatan
# Create your views here.

@api_view(['GET'])
def coba_route(request):
    
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)


@api_view(['GET'])
def ambil_catatan(request):
    catatan = Catatan.objects.all()  #ambil data dari basis data
    serializer = SerializerCatatan(catatan,many=True) # serializerkan
    return Response(serializer.data) #

@api_view(['GET'])
def ambil_catatan_tunggal(request,pk):
    catatan = Catatan.objects.get(id=pk)  #ambil data dari basis data
    serializer = SerializerCatatan(catatan,many=False) # serializerkan
    return Response(serializer.data) #

