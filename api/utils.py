from rest_framework.response import Response
from .models import Catatan
from .serializer import SerializerCatatan
from api import serializer



def ambil_list_catatan(request):
    catatan = Catatan.objects.all().order_by('-waktu_terakhir_diedit')  #ambil data dari basis data
    serializer = SerializerCatatan(catatan,many=True) # serializerkan
    
    return Response(serializer.data) #

def buat_catatan(request):
    data = request.data
    catatan = Catatan.objects.create(
        isi=data['isi']
        )
    serializer = SerializerCatatan(catatan,many=False)
    
    return Response(serializer.data)

def ambil_detail_catatan_tunggal(request,pk):
    catatan = Catatan.objects.get(id=pk)  #ambil data dari basis data
    serializer = SerializerCatatan(catatan,many=False) # serializerkan
    return Response(serializer.data) #

def perbaharui_catatan(request,pk):
    data = request.data 
    catatan = Catatan.objects.get(id=pk)
    serializer = SerializerCatatan(instance=catatan,data=data)

    if serializer.is_valid():
        serializer.save()

    return serializer.data

def hapus_catatan(request,pk):
    catatan = Catatan.objects.get(id=pk)
    catatan.delete()

    return Response('Catatan Telah Terhapus')


