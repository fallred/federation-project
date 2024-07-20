class MicroComponent { 
    private _loaded = false; 
    private _app: any; 
    private _count = 0; 
   
    async loadComponent() { 
      try { 
        this._count++; 
        if (!this._loaded) { 
          this._loaded = true; 
          this._app = await window.Garfish.loadApp(this._subAppName, { 
            domGetter: () => document.body, 
            props: { 
              subAppName: this._subAppName, 
            }, 
          }); 
   
          await this._app.mount(); 
        } 
   
        const unMount = (_params_: PropsChange) => { 
          this.emitPropsChange(_params_); 
          this._count--; 
          if (this._count === 0) { 
            console.info('[微组件] 子应用卸载了'); 
            this._app.unmount(); 
            this._loaded = false; 
            this._app = null; 
          } 
        }; 
   
        if (!this._app) { 
          return { 
            unMount, 
          }; 
        } 
   
        console.info('[微组件] 加载完毕'); 
        this._debounceEmitPropChange(); 
   
        return { 
          unMount, 
        }; 
      } catch (e) { 
        console.error(`[微组件] 子应用加载失败: ${e}`); 
        this._loaded = false; 
        this._app = null; 
        this._count = 0; 
        return { 
          error: 'CMS 加载子应用失败', 
        }; 
      } 
    } 
  } 