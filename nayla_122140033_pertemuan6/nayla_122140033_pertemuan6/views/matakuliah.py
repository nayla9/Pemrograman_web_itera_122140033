from pyramid.view import view_config
from pyramid.httpexceptions import HTTPNotFound, HTTPBadRequest
from ..models import Matakuliah
import traceback  # Tambahan untuk debug

@view_config(route_name='matakuliah_list', renderer='json')
def list_matakuliah(request):
    matakuliahs = request.dbsession.query(Matakuliah).all()
    return {'matakuliah': [m.to_dict() for m in matakuliahs]}

@view_config(route_name='matakuliah_detail', renderer='json')
def detail_matakuliah(request):
    id_ = request.matchdict['id']
    mk = request.dbsession.query(Matakuliah).filter_by(id=id_).first()
    if not mk:
        return HTTPNotFound(json_body={'error': 'Matakuliah tidak ditemukan'})
    return {'matakuliah': mk.to_dict()}

@view_config(route_name='matakuliah_add', request_method='POST', renderer='json')
def tambah_matakuliah(request):
    data = request.json_body
    try:
        mk = Matakuliah(
            kode_mk=data['kode_mk'],
            nama_mk=data['nama_mk'],
            sks=int(data['sks']),
            semester=int(data['semester'])
        )
        request.dbsession.add(mk)
        request.dbsession.flush()
        return {'success': True, 'matakuliah': mk.to_dict()}
    except Exception as e:
        traceback.print_exc()  # Debug tambahan
        return HTTPBadRequest(json_body={'error': str(e)})

@view_config(route_name='matakuliah_update', request_method='PUT', renderer='json')
def update_matakuliah(request):
    id_ = request.matchdict['id']
    mk = request.dbsession.query(Matakuliah).filter_by(id=id_).first()
    if not mk:
        return HTTPNotFound(json_body={'error': 'Matakuliah tidak ditemukan'})
    data = request.json_body
    for field in ['kode_mk', 'nama_mk', 'sks', 'semester']:
        if field in data:
            value = data[field]
            if field in ['sks', 'semester']:
                try:
                    value = int(value)
                except ValueError:
                    return HTTPBadRequest(json_body={'error': f'{field} harus berupa angka'})
            setattr(mk, field, value)
    return {'success': True, 'matakuliah': mk.to_dict()}

@view_config(route_name='matakuliah_delete', request_method='DELETE', renderer='json')
def delete_matakuliah(request):
    id_ = request.matchdict['id']
    mk = request.dbsession.query(Matakuliah).filter_by(id=id_).first()
    if not mk:
        return HTTPNotFound(json_body={'error': 'Matakuliah tidak ditemukan'})
    request.dbsession.delete(mk)
    return {'success': True, 'message': f'Matakuliah dengan id {id_} berhasil dihapus'}
