export default {
  "mount": {
    "title": "マウント管理",
    "accessibleMounts": "アクセス可能なマウントポイント",
    "createMount": "新規マウントポイント",
    "editMount": "マウントポイントを編集",
    "refresh": "更新",
    "refreshing": "更新中...",
    "search": "マウントポイントを検索...",
    "status": {
      "active": "有効",
      "inactive": "無効",
      "enabled": "有効化済み",
      "disabled": "無効化済み"
    },
    "info": {
      "name": "マウントポイント名称",
      "path": "マウントパス",
      "storageType": "ストレージタイプ",
      "storageConfig": "ストレージ設定",
      "remark": "備考",
      "sortOrder": "並べ替え順",
      "cacheTtl": "キャッシュ有効時間",
      "createdBy": "作成者",
      "createdAt": "作成日時",
      "updatedAt": "更新日時",
      "lastRefresh": "最終更新"
    },
    "form": {
      "name": "マウントポイント名称",
      "namePlaceholder": "マウントポイント名称を入力",
      "nameHint": "マウントポイントを識別する名称を入力します",
      "storageType": "ストレージタイプ",
      "storageTypeHint": "ストレージバックエンドの種類を選択します",
      "storageConfig": "ストレージ設定",
      "storageConfigPlaceholder": "ストレージ設定を選択します",
      "storageConfigHint": "使用するS3ストレージ設定を選択します",
      "mountPath": "マウントパス",
      "mountPathPlaceholder": "例：/documents や /images",
      "mountPathHint": "ストレージ内のパスを指定します（/で始まる必要があります）",
      "remark": "備考",
      "remarkPlaceholder": "備考情報を入力します",
      "remarkHint": "任意の説明情報を入力します",
      "sortOrder": "並べ替え順",
      "sortOrderHint": "数字が小さいほど上位に表示されます",
      "cacheTtl": "キャッシュ有効時間（秒）",
      "cacheTtlHint": "ファイルリストのキャッシュ時間（0を指定するとキャッシュしない）",
      "isActive": "有効状態",
      "isActiveHint": "このマウントポイントを有効にします",
      "s3Config": "S3ストレージ設定",
      "selectS3Config": "S3ストレージ設定を選択",
      "noS3Config": "利用可能なS3ストレージ設定がありません",
      "storageTypes": {
        "s3": "S3ストレージ"
      },
      "cacheTtlPlaceholder": "デフォルト300秒",
      "sortOrderPlaceholder": "0",
      "save": "保存",
      "saving": "保存中...",
      "cancel": "キャンセル",
      "create": "作成",
      "creating": "作成中...",
      "update": "更新",
      "updating": "更新中..."
    },
    "actions": {
      "edit": "編集",
      "delete": "削除",
      "enable": "有効化",
      "disable": "無効化",
      "view": "表示",
      "browse": "参照"
    },
    "confirmDelete": {
      "title": "削除確認",
      "message": "マウントポイント \"{name}\" を削除しますか？この操作は元に戻せません。",
      "confirm": "削除",
      "cancel": "キャンセル"
    },
    "success": {
      "created": "マウントポイントの作成に成功しました",
      "updated": "マウントポイントの更新に成功しました",
      "deleted": "マウントポイントの削除に成功しました",
      "enabled": "マウントポイントを有効化しました",
      "disabled": "マウントポイントを無効化しました",
      "refreshed": "データの更新に成功しました"
    },
    "error": {
      "loadFailed": "マウントポイント一覧の読み込みに失敗しました",
      "createFailed": "マウントポイントの作成に失敗しました",
      "updateFailed": "マウントポイントの更新に失敗しました",
      "deleteFailed": "マウントポイントの削除に失敗しました",
      "enableFailed": "マウントポイントの有効化に失敗しました",
      "disableFailed": "マウントポイントの無効化に失敗しました",
      "loadS3ConfigsFailed": "S3設定の読み込みに失敗しました",
      "loadApiKeysFailed": "APIキー一覧の読み込みに失敗しました",
      "noPermission": "この操作を実行する権限がありません",
      "apiKeyNoPermission": "APIキーユーザーはマウントポイントの状態変更権限がありません",
      "apiKeyCannotDelete": "APIキーユーザーはマウントポイントの削除権限がありません",
      "apiKeyCannotCreate": "APIキーユーザーはマウントポイントの作成権限がありません",
      "apiKeyCannotManage": "APIキーユーザーはマウントポイントの管理権限がありません",
      "saveFailed": "保存に失敗しました"
    },
    "validation": {
      "nameRequired": "マウントポイント名称を入力してください",
      "nameLength": "マウントポイント名称は1〜50文字で入力してください",
      "storageTypeRequired": "ストレージタイプを選択してください",
      "s3ConfigRequired": "S3設定を選択してください",
      "mountPathRequired": "マウントパスを入力してください",
      "mountPathFormat": "マウントパスは/で始まる必要があります",
      "mountPathInvalid": "マウントパスの形式が正しくありません（/xxx形式で、英数字、アンダースコア、ハイフン、日本語、スラッシュのみ使用可能）",
      "mountPathSystemReserved": "システム予約パスは使用できません",
      "cacheTTLInteger": "キャッシュ有効時間は整数で入力してください",
      "cacheTTLNonNegative": "キャッシュ有効時間は負の値を指定できません",
      "cacheTTLTooLarge": "キャッシュ有効時間は86400秒（24時間）を超えることはできません",
      "sortOrderInteger": "並べ替え順は整数で入力してください"
    },
    "empty": {
      "title": "マウントポイントがありません",
      "description": "まだマウントポイントを作成していません",
      "createFirst": "最初のマウントポイントを作成してください"
    },
    "searchResults": {
      "noResults": "一致するマウントポイントが見つかりません",
      "found": "{count} 個のマウントポイントを見つけました",
      "clearSearch": "検索をクリア",
      "tryDifferentTerms": "異なる検索条件を試してください"
    },
    "creators": {
      "system": "システム",
      "admin": "管理者",
      "apiKey": "APIキー"
    },
    "currentApiKey": "現在のキー",
    "unknownCreator": "不明な作成者",
    "noRemark": "備考なし",
    "unlimited": "制限なし",
    "seconds": "秒"
  }
};