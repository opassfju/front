 #!/usr/bin/python
 # -*- coding: utf-8 -*-

import json
from flask import Flask
from flask import make_response
from flask import request
from flask import render_template
from flask import Response
# from bson import json_util
from instance import config
from datetime import datetime
import time
import importlib
import sys


#importlib.reload(sys)
#sys.setdefaultencoding('utf-8')


app = Flask(__name__)


def sort_data(data):
    def stime(s):
        return s['time']
    return sorted(data, key=stime, reverse=True)


@app.route('/')
def index():
    obj = {'title':'Python Flask starter',
           'description': 'This is a \'Python Flask starter\' power by Charlieeeee',
           'author': 'Charlieeeee'}

    return render_template('index.html', head=obj)

@app.route('/submit')
def submit():
    return render_template('submit.html')


# @app.route('/json')
# def getjson():
#     json = [{'id': 1, 'name':'test'}, {'id':2, 'name':'test'}]
#    return generate_json(json)

# def generate_json(f):
#    result = json.dumps(f, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, cls=None,
#                        indent=True, separators=None, encoding="utf-8", sort_keys=False, default=json_util.default)
#    resp = make_response(result)
#    if request.headers.get('Accept', '').find('application/json') > -1:
#        resp.mimetype = 'application/json'
#    else:
#        resp.mimetype = 'text/plain'
#    return resp

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=config.SERVER_PORT, threaded=True, debug=True, use_reloader=True)
